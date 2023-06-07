const printErrorShouldLoginBefore = () => {
    console.log(
      '%cError, script failed to parse your data',
      'font-size: 18px; color: #f00; background: #000;'
    );
    throw new Error('NOT_LOGGED_IN');
  };
  
  const printGenericError = (err) => {
    console.log(
      `%cError: ${err}`,
      'font-size: 18px; color: #f00; background: #000;'
    );
    throw err;
  };
  
  const currentCycle = 6;
  
  const userLocalKey = `@mkbm/manager/user`;
  const storageData = localStorage.getItem(userLocalKey);
  if (!storageData) {
    printErrorShouldLoginBefore();
  }
  const storageDataParsed = JSON.parse(storageData);
  if (!storageDataParsed) {
    printErrorShouldLoginBefore();
  }
  const token = storageDataParsed?.value?.token;
  if (!token) {
    printErrorShouldLoginBefore();
  }
  
  const abortController = new AbortController();
  
  const getActiveDocuments = async () => {
    const resp = await fetch(
      'https://api.kampusmerdeka.kemdikbud.go.id/v1alpha1/documents?type=SPTJM,SURAT_REKOMENDASI&programs=Studi%20Independen',
      {
        signal: abortController.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((resp) => resp.json());
    const docs = resp.data;
    const mapDocumentByType = {};
    docs.forEach((doc) => {
      if (!(doc.type in mapDocumentByType)) {
        mapDocumentByType[doc.type] = [];
      }
  
      doc.cycle_int = Number.parseInt(doc.cycle);
      mapDocumentByType[doc.type].push(doc);
    });
  
    return mapDocumentByType;
  };
  
  const getDocumentLatestCycle = (currentCycle, data) => {
    const sortedData = [...data].sort(
      (docA, docB) => docB.cycle_int - docA.cycle_int
    );
    return sortedData.find((doc) => doc.cycle_int <= currentCycle);
  };
  
  const getUserDocumentStatus = async (docId, docType) => {
    const resp = await fetch(
      `https://api.kampusmerdeka.kemdikbud.go.id/v1alpha1/documents/${docId}/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((resp) => resp.json());
  
    const status = resp?.data?.status;
    if (!status) {
      return `DOKUMEN ${docType} TIDAK DAPAT DITEMUKAN`;
    }
  
    return status;
  };
  
  const main = async () => {
    try {
      const documentMapped = await getActiveDocuments();
      const docsSPTJM = documentMapped['SPTJM'];
      const docsSR = documentMapped['SURAT_REKOMENDASI'];
  
      if (!docsSPTJM || !docsSR) {
        throw 'data SPTJM atau SURAT REKOMENDASI tidak ditemukan';
      }
  
      const validDocSPTJM = getDocumentLatestCycle(currentCycle, docsSPTJM);
      const validDocsSR = getDocumentLatestCycle(currentCycle, docsSR);
  
      if (!docsSPTJM || !docsSR) {
        throw 'data SPTJM atau SURAT REKOMENDASI tidak ditemukan';
      }
  
      const sptjmId = validDocSPTJM.id;
      const srId = validDocsSR.id;
      const statusUserSptjm = await getUserDocumentStatus(sptjmId, 'SPTJM');
      const statusUserSr = await getUserDocumentStatus(srId, 'SURAT REKOMENDASI');
  
      console.log(
        `%cstatus SPTJM kamu adalah %c${statusUserSptjm}`,
        'font-size: 24px; color: black; background: white;',
        `font-size: 30px; background: ${
          statusUserSptjm === 'VERIFIED'
            ? 'green'
            : statusUserSptjm === 'REJECTED'
            ? 'red'
            : 'blue'
        }; color: white;`
      );
      console.log(
        `%cstatus SURAT REKOMENDASI kamu adalah %c${statusUserSr}`,
        'font-size: 24px; color: black; background: white;',
        `font-size: 30px; background: ${
          statusUserSr === 'VERIFIED'
            ? 'green'
            : statusUserSr === 'REJECTED'
            ? 'red'
            : 'blue'
        }; color: white;`
      );
    } catch (err) {
      printGenericError(err);
    }
  };
  
  main();