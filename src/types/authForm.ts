export type InputValue = { [index: string]: string };

export type FormProps = {
  submitType: string;
  postForm: (inputValue: InputValue) => void;
  linkUrl: string;
  linkMessage: string;
};
