export default class ENV {
  static getApi = () => process.env.REACT_APP_API || "";
}
