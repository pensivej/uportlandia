import * as ACTIONS from "../constants/actions";

export const setLoading = (id, status) => ({
  type: ACTIONS.IS_LOADING,
  id,
  status
});

export const pollChasqui = callbackId => ({
  type: ACTIONS.POLL_CHASQUI,
  callbackId
});

export const pollChasquiSuccess = (callbackId, value) => ({
  type: ACTIONS.POLL_CHASQUI_OK,
  callbackId,
  value
});

export const initCredentials = () => ({
  type: ACTIONS.CRED_INIT
});

export const initCredentialsSuccess = () => ({
  type: ACTIONS.CRED_INIT_OK
});

export const reqDisclosure = callbackId => ({
  type: ACTIONS.REQ_DISCLOSURE,
  callbackId
});

export const reqDisclosureSuccess = (callbackId, url) => ({
  type: ACTIONS.REQ_DISCLOSURE_OK,
  callbackId,
  url
});

export const verifyCredentials = token => ({
  type: ACTIONS.CRED_VERIFY,
  token
});

export const verifyCredentialsSuccess = value => ({
  type: ACTIONS.CRED_VERIFY_OK,
  value
});

export const sendVerification = (callbackId, profile, claim) => ({
  type: ACTIONS.SEND_VERIF,
  callbackId,
  profile,
  claim
});

export const sendVerificationSuccess = (callbackId, url, isPush=false) => ({
  type: ACTIONS.SEND_VERIF_OK,
  callbackId,
  url,
  isPush
});

export const sendVerificationFailure = (callbackId, error) => ({
  type: ACTIONS.SEND_VERIF_ERR,
  callbackId,
  error
});

export const logout = () => ({
  type: ACTIONS.LOGOUT
});

export const saveProfile = profile => ({
  type: ACTIONS.SAVE_PROFILE,
  profile
});

export const loadProfile = () => ({
  type: ACTIONS.LOAD_PROFILE
});

export const loadProfileSuccess = value => ({
  type: ACTIONS.LOAD_PROFILE_OK,
  value
});

export const loadProfileFailure = error => ({
  type: ACTIONS.LOAD_PROFILE_ERR,
  error
});

export const redirectToHome = () => ({
  type: ACTIONS.REDIR_HOME
});

export const redirectToCityHome = () => ({
  type: ACTIONS.REDIR_CITY_HOME
});

export const redirectToCityIdForm = () => ({
  type: ACTIONS.REDIR_CITY_ID_FORM
});

export const redirectToCityIdFormSubmit = () => ({
  type: ACTIONS.REDIR_CITY_ID_FORM_SUB
});

export const changeCityIdInfo = value => ({
  type: ACTIONS.CHANGE_CITY_ID_INFO,
  value
});
