import React, {FunctionComponent, useState, useEffect, useRef} from "react";

import "./FileUpload.scss";

interface Props {
  fileTypes?: string[];
  uploadFile: (file: File) => Promise<{status: number, message: string}>;
  onError?: () => void;
}

const FileUpload: FunctionComponent<Props> = (props) => {

  const [uploadBtnLbl, setUploadBtnLbl] = useState<"Upload"|"Uploading..."|"Complete"|"Error">("Upload");

  const [file, setFile] = useState<File|undefined>(undefined);

  const [uploadSubmitBtnEnabled, setUploadSubmitBtnEnabled] = useState<boolean>(false);

  const fileInputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (file) {
        setUploadSubmitBtnEnabled(true)
    } else {
        setUploadSubmitBtnEnabled(false);
        fileInputEl.current.value = "";
    }
  }, [file]);

  const handleFileUpload = async () => {
    if (file) {
      setUploadSubmitBtnEnabled(false);
      setUploadBtnLbl("Uploading...");
      const resp = await props.uploadFile(file)
      if (resp.status === 200) {
        resetForm();
      } else {
        handleError();
      }
    }
  };

  const resetForm = () => {
    setUploadBtnLbl("Complete");
    window.setTimeout(() => {
      setFile(undefined);
      setUploadBtnLbl("Upload");
    }, 1500)
  };

  const handleError = () => {
    props.onError();
    setUploadBtnLbl("Error");
    window.setTimeout(() => {
      setUploadSubmitBtnEnabled(true);
      setUploadBtnLbl("Upload");
    }, 1500)
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files? event.currentTarget.files[0] : undefined;
    setFile(file);
  };

  return (
    <form>
      <input ref={fileInputEl} type="file" accept={props.fileTypes ? props.fileTypes.join(", ") : ""} onChange={handleFileInput} />
      <input type="button" value={uploadBtnLbl} onClick={handleFileUpload} disabled={!uploadSubmitBtnEnabled} />
    </form>
  )

};

export default FileUpload;
