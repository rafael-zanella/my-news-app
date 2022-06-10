import { FC } from "react";
import { Container } from "./Button.styled";

interface IProps {
  formData?: any;
  handleChange?: any;
  handleImageChange?: any;
  progress?: any;
  handlePublish?: any
}

export const Form: FC<IProps> = ({
  formData,
  handleChange,
  handleImageChange,
  progress,
  handlePublish,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={formData?.title}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {/* description */}
      <label htmlFor="">Description</label>
      <textarea
        name="description"
        value={formData?.description}
        onChange={(e) => handleChange(e)}
      />

      {/* image */}
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => handleImageChange(e)}
      />

      {progress === 0 ? null : (
        <div className="progress">
          <div
            style={{ width: `${progress}%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )}
      <button onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
};
