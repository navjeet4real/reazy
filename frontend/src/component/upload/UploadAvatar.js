import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

import Upload from "../../Images/upload.png"

// ----------------------------------------------------------------------

UploadAvatar.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.node,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default function UploadAvatar({
  error,
  file,
  disabled,
  helperText,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    multiple: false,
    disabled,
    ...other,
  });

  const hasFile = !!file;

  const isError = isDragReject || !!error;

  return (
    <>
      <div className="click_upload mt-2" {...getRootProps()} >
      <div className="upload">
            <img src={Upload} alt="" />
            <input {...getInputProps()} />
          </div>
          <div className="dragupload">
            <h6>
              <span>Click to upload</span> or drag and drop{" "}
            </h6>
            <h6>PNG, JPG (max 2.5MB)</h6>
          </div>
      </div>
        {/* {...getRootProps()} */}
   
        {/* <input {...getInputProps()} /> */}

        {/* {hasFile && <AvatarPreview file={file} />} */}

  

   
      

      {/* {helperText && helperText} */}
    </>
  );
}