import React from "react";
import FileUpload from "./FileUpload";

export default {
  title: "File Upload"
};

const uploadFile = (file, throwError = false) => {
  const formData = new FormData();
  formData.append("file", file);
  return new Promise( (resolve, reject) => {
    window.setTimeout(() => {
      resolve (throwError
        ? {status: 500, message: "Error uploading file."}
        : {status: 200, message: "File was uploaded."}
      )
    }, 2000)
  })
};

const sendAlert = () => {
  alert("Error uploading file.")
};

export const Primary = () => <FileUpload uploadFile={uploadFile} />;

export const HandleError = () => <FileUpload uploadFile={(file) => uploadFile(file, true) } onError={sendAlert} />

export const AcceptImages = () => <FileUpload uploadFile={uploadFile} fileTypes={["image/png", "image/jpeg"]} />

