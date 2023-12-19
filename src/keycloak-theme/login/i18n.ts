import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  // en: {
  //     alphanumericalCharsOnly: "Only alphanumerical characters",
  //     gender: "Gender",
  //     // Here we overwrite the default english value for the message "doForgotPassword"
  //     // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
  //     doForgotPassword: "I forgot my password",
  //     invalidUserMessage: "Invalid username or password. (this message was overwrite in the theme)"
  // },
  en: {
    doLogIn: "로그인",
    doRegister: "등록하다",
    doCancel: "취소",
    doSubmit: "제출하다",
    doBack: "뒤쪽에",
    doYes: "예",
    doNo: "아니요",
    doContinue: "계속하다",
    doIgnore: "무시하다",
    doAccept: "수용하다",
    doDecline: "감소",
    doForgotPassword: "비밀번호를 잊으 셨나요?",
    doClickHere: "여기를 클릭하세요",
    doImpersonate: "가장",
    doTryAgain: "다시 시도하십시오",
    doTryAnotherWay: "다른 방법을 시도해 보세요",
    doConfirmDelete: "삭제 확인",
    errorDeletingAccount: "계정을 삭제하는 중 오류가 발생했습니다.",
    deletingAccountForbidden:
      "자신의 계정을 삭제할 수 있는 권한이 없습니다. 관리자에게 문의하세요.",
    kerberosNotConfigured: "Kerberos가 구성되지 않았습니다.",
    kerberosNotConfiguredTitle: "Kerberos가 구성되지 않았습니다.",
    bypassKerberosDetail:
      "Kerberos로 로그인하지 않았거나 브라우저에 Kerberos 로그인이 설정되어 있지 않습니다. 다음을 통해 로그인하려면 계속을 클릭하세요.other means",
    kerberosNotSetUp: "Kerberos가 설정되지 않았습니다. 로그인할 수 없습니다.",
    registerTitle: "등록하다",
    loginAccountTitle: "귀하의 계정에 로그인하세요",
    loginTitle: "{0}에 로그인",
    loginTitleHtml: "{0}",
    impersonateTitle: "{0} 사용자 가장",
    impersonateTitleHtml: "<strong>{0}</strong> 사용자 가장",
    realmChoice: "왕국",
    unknownUser: "알 수없는 사용자",
    loginTotpTitle: "모바일 인증기 설정",
    loginProfileTitle: "계정 정보 업데이트",
    loginIdpReviewProfileTitle: "계정 정보 업데이트",
    loginTimeout:
      "로그인 시도 시간이 초과되었습니다. 로그인이 처음부터 시작됩니다.",
    reauthenticate: "계속하려면 재인증하세요.",
    oauthGrantTitle: "{0}에 대한 액세스 권한 부여",
    oauthGrantTitleHtml: "{0}",
    oauthGrantInformation:
      "{0}이 데이터를 처리하는 방법을 알아보고 {0}을 신뢰하는지 확인하세요.",
    oauthGrantReview: "당신은",
    oauthGrantTos: "서비스 약관.",
    oauthGrantPolicy: "개인 정보 정책.",
    errorTitle: "미안 해요...",
    errorTitleHtml: "<strong>죄송합니다</strong>...",
    emailVerifyTitle: "이메일 인증",
    emailForgotTitle: "비밀번호를 잊어 버렸습니까?",
    updateEmailTitle: "이메일 업데이트",
    emailUpdateConfirmationSentTitle: "확인 이메일이 전송되었습니다.",
    emailUpdateConfirmationSent:
      "확인 이메일이 {0}(으)로 전송되었습니다. 이메일 업데이트를 완료하려면 전자의 지침을 따라야 합니다.",
    emailUpdatedTitle: "이메일이 업데이트되었습니다.",
    emailUpdated: "계정 이메일이 {0}(으)로 업데이트되었습니다.",
    updatePasswordTitle: "비밀번호 업데이트",
    codeSuccessTitle: "성공 코드",
    codeErrorTitle: "오류 코드: {0}",
    displayUnsupported: "요청한 디스플레이 유형이 지원되지 않습니다.",
    browserRequired: "로그인하려면 브라우저가 필요합니다",
    browserContinue: "로그인을 완료하려면 브라우저가 필요합니다.",
    browserContinuePrompt:
      "브라우저를 열고 계속 로그인하시겠습니까? [예/아니요]:",
    browserContinueAnswer: "예",
    usb: "USB",
    nfc: "NFC",
    bluetooth: "블루투스",
    internal: "내부",
    unknown: "알려지지 않은",
    termsTitle: "이용약관",
    termsText: "<p>정의할 이용약관</p>",
    termsPlainText: "정의할 이용 약관.",
    termsAcceptanceRequired: "귀하는 당사의 이용 약관에 동의해야 합니다.",
    acceptTerms: "이용약관에 동의합니다.",
    recaptchaFailed: "잘못된 재보안 문자",
    recaptchaNotConfigured: "Recaptcha가 필요하지만 구성되지 않았습니다.",
    consentDenied: "동의가 거부되었습니다.",
    noAccount: "새로운 사용자?",
    username: "사용자 이름",
    usernameOrEmail: "아이디 또는 이메일",
    firstName: "이름",
    givenName: "이름",
    fullName: "성명",
    lastName: "성",
    familyName: "성",
    email: "이메일",
    password: "비밀번호",
    passwordConfirm: "비밀번호 확인",
    passwordNew: "새 비밀번호",
    passwordNewConfirm: "새로운 비밀번호 확인",
    hidePassword: "비밀번호 숨기기",
    showPassword: "비밀번호 표시",
    rememberMe: "날 기억해",
    authenticatorCode: "일회용 코드",
    address: "주소",
    street: "거리",
    locality: "도시 또는 지역",
    region: "주, 도 또는 지역",
    postal_code: "우편 번호",
    country: "국가",
    emailVerified: "이메일이 확인되었습니다.",
    website: "웹 페이지",
    phoneNumber: "전화 번호",
    phoneNumberVerified: "전화번호가 확인되었습니다.",
    gender: "성별",
    birthday: "생일",
    zoneinfo: "시간대",
    gssDelegationCredential: "GSS 위임 자격 증명",
    logoutOtherSessions: "다른 기기에서 로그아웃",
    profileScopeConsentText: "유저 프로필",
    emailScopeConsentText: "이메일 주소",
    addressScopeConsentText: "주소",
    phoneScopeConsentText: "전화 번호",
    offlineAccessScopeConsentText: "오프라인 액세스",
    samlRoleListScopeConsentText: "내 역할",
    rolesScopeConsentText: "사용자 역할",
    restartLoginTooltip: "로그인 다시 시작",
    loginTotpIntro:
      "이 계정에 액세스하려면 일회용 비밀번호 생성기를 설정해야 합니다.",
    loginTotpStep1: "모바일에 다음 애플리케이션 중 하나를 설치하세요.",
    loginTotpStep2: "애플리케이션을 열고 바코드를 스캔하세요.",
    loginTotpStep3:
      "애플리케이션에서 제공한 일회용 코드를 입력하고 제출을 클릭하여 설정을 완료하세요.",
    loginTotpStep3DeviceName:
      "OTP 장치를 관리하는 데 도움이 되는 장치 이름을 제공하세요.",
    loginTotpManualStep2: "애플리케이션을 열고 다음 키를 입력하세요.",
    loginTotpManualStep3:
      "애플리케이션에서 설정을 허용하는 경우 다음 구성 값을 사용하십시오.",
    loginTotpUnableToScan: "스캔할 수 없나요?",
    loginTotpScanBarcode: "바코드를 스캔하시겠습니까?",
    loginCredential: "신임장",
    loginOtpOneTime: "일회용 코드",
    loginTotpType: "유형",
    loginTotpAlgorithm: "연산",
    loginTotpDigits: "숫자",
    loginTotpInterval: "간격",
    loginTotpCounter: "카운터",
    loginTotpDeviceName: "장치 이름",
    "loginTotp.totp": "시간 기반",
    "loginTotp.hotp": "카운터 기반",
    totpAppFreeOTPName: "FreeOTP",
    totpAppGoogleName: "Google Authenticator",
    totpAppMicrosoftAuthenticatorName: "Microsoft Authenticator",
    loginChooseAuthenticator: "로그인 방법 선택",
    oauthGrantRequest: "이러한 액세스 권한을 부여합니까?",
    inResource: "에",
    oauth2DeviceVerificationTitle: "장치 로그인",
    verifyOAuth2DeviceUserCode:
      "기기에서 제공한 코드를 입력하고 제출을 클릭하세요.",
    oauth2DeviceInvalidUserCodeMessage: "잘못된 코드, 다시 시도하십시오.",
    oauth2DeviceExpiredUserCodeMessage:
      "코드가 만료되었습니다. 기기로 돌아가서 다시 연결해 보세요.",
    oauth2DeviceVerificationCompleteHeader: "장치 로그인 성공",
    oauth2DeviceVerificationCompleteMessage:
      "이 브라우저 창을 닫고 장치로 돌아갈 수 있습니다.",
    oauth2DeviceVerificationFailedHeader: "장치 로그인 실패",
    oauth2DeviceVerificationFailedMessage:
      "이 브라우저 창을 닫고 장치로 돌아가서 다시 연결해 보세요.",
    oauth2DeviceConsentDeniedMessage: "장치 연결에 대한 동의가 거부되었습니다.",
    oauth2DeviceAuthorizationGrantDisabledMessage:
      "클라이언트는 OAuth 2.0 장치 인증 부여를 시작할 수 없습니다. 클라이언트에 대한 흐름이 비활성화되었습니다.",
    emailVerifyInstruction1:
      "귀하의 이메일 주소를 확인하기 위한 지침이 포함된 이메일이 귀하의 주소({0})로 전송되었습니다.",
    emailVerifyInstruction2: "이메일로 인증 코드를 받지 못하셨나요?",
    emailVerifyInstruction3: "이메일을 다시 보내려면",
    emailLinkIdpTitle: "링크 {0}",
    emailLinkIdp1:
      "{0} 계정 {1}을(를) 귀하의 {2} 계정과 연결하는 방법에 대한 지침이 포함된 이메일이 귀하에게 전송되었습니다.",
    emailLinkIdp2: "이메일로 인증 코드를 받지 못하셨나요?",
    emailLinkIdp3: "이메일을 다시 보내려면",
    emailLinkIdp4: "이미 다른 브라우저에서 이메일을 확인한 경우",
    emailLinkIdp5: "계속하다.",
    backToLogin: "&laquo; 로그인으로 돌아가기",
    emailInstruction:
      "사용자 이름이나 이메일 주소를 입력하시면 새 비밀번호를 만드는 방법에 대한 지침을 보내드립니다.",
    emailInstructionUsername:
      "사용자 이름을 입력하시면 새 비밀번호를 만드는 방법에 대한 지침을 보내드립니다.",
    copyCodeInstruction: "이 코드를 복사하여 애플리케이션에 붙여넣으세요.:",
    pageExpiredTitle: "페이지가 만료되었습니다",
    pageExpiredMsg1: "로그인 프로세스를 다시 시작하려면",
    pageExpiredMsg2: "로그인 프로세스를 계속하려면",
    personalInfo: "개인적인 정보:",
    role_admin: "관리자",
    "role_realm-admin": "영역 관리자",
    "role_create-realm": "영역 만들기",
    "role_create-client": "클라이언트 생성",
    "role_view-realm": "영역 보기",
    "role_view-users": "사용자 보기",
    "role_view-applications": "애플리케이션 보기",
    "role_view-clients": "클라이언트 보기",
    "role_view-events": "이벤트 보기",
    "role_view-identity-providers": "ID 공급자 보기",
    "role_manage-realm": "영역 관리",
    "role_manage-users": "사용자 관리",
    "role_manage-applications": "응용 프로그램 관리",
    "role_manage-identity-providers": "ID 공급자 관리",
    "role_manage-clients": "클라이언트 관리",
    "role_manage-events": "이벤트 관리",
    "role_view-profile": "프로필보기",
    "role_manage-account": "계정 관리",
    "role_manage-account-links": "계정 링크 관리",
    "role_read-token": "토큰 읽기",
    "role_offline-access": "오프라인 액세스",
    client_account: "계정",
    "client_account-console": "계정 콘솔",
    "client_security-admin-console": "보안 관리 콘솔",
    "client_admin-cli": "관리 CLI",
    "client_realm-management": "영역 관리",
    client_broker: "브로커",
    requiredFields: "필수 입력 사항",
    invalidUserMessage: "사용자 이름 또는 비밀번호가 잘못되었습니다.",
    invalidUsernameMessage: "잘못된 사용자 이름.",
    invalidUsernameOrEmailMessage: "사용자 이름이나 이메일이 잘못되었습니다.",
    invalidPasswordMessage: "유효하지 않은 비밀번호.",
    invalidEmailMessage: "잘못된 이메일 주소.",
    accountDisabledMessage: "계정이 비활성화되었습니다. 관리자에게 문의하세요.",
    accountTemporarilyDisabledMessage:
      "계정이 일시적으로 비활성화되었습니다. 관리자에게 문의하거나 나중에 다시 시도하세요.",
    expiredCodeMessage: "로그인 시간이 초과되었습니다. 다시 로그인해 주세요.",
    expiredActionMessage:
      "작업이 만료되었습니다. 계속해서 로그를 작성해 주세요",
    expiredActionTokenNoSessionMessage: "작업이 만료되었습니다.",
    expiredActionTokenSessionExistsMessage:
      "작업이 만료되었습니다. 다시 시작해주세요.",
    sessionLimitExceeded: "세션이 너무 많습니다.",
    missingFirstNameMessage: "이름을 지정해 주세요.",
    missingLastNameMessage: "성을 지정해 주세요.",
    missingEmailMessage: "이메일을 지정해 주세요.",
    missingUsernameMessage: "사용자 이름을 지정하십시오.",
    missingPasswordMessage: "비밀번호를 지정해주세요.",
    missingTotpMessage: "인증자 코드를 지정하세요.",
    missingTotpDeviceNameMessage: "장치 이름을 지정하십시오.",
    notMatchPasswordMessage: "비밀번호가 일치하지 않습니다.",
    "error-invalid-value": "잘못된 값.",
    "error-invalid-blank": "값을 지정하십시오.",
    "error-empty": "값을 지정하십시오.",
    "error-invalid-length": "길이는 {1}에서 {2} 사이여야 합니다.",
    "error-invalid-length-too-short": "최소 길이는 {1}입니다.",
    "error-invalid-length-too-long": "최대 길이는 {2}입니다.",
    "error-invalid-email": "잘못된 이메일 주소.",
    "error-invalid-number": "잘못된 번호.",
    "error-number-out-of-range": "번호는 {1}에서 {2} 사이여야 합니다.",
    "error-number-out-of-range-too-small": "숫자의 최소값은 {1}이어야 합니다.",
    "error-number-out-of-range-too-big": "숫자의 최대값은 {2}이어야 합니다.",
    "error-pattern-no-match": "잘못된 값.",
    "error-invalid-uri": "잘못된 URL.",
    "error-invalid-uri-scheme": "잘못된 URL 구성표입니다.",
    "error-invalid-uri-fragment": "잘못된 URL 조각입니다.",
    "error-user-attribute-required": "이 필드를 지정하십시오.",
    "error-invalid-date": "잘못된 날짜.",
    "error-user-attribute-read-only": "이 필드는 읽기 전용입니다.",
    "error-username-invalid-character": "값에 잘못된 문자가 포함되어 있습니다.",
    "error-person-name-invalid-character":
      "값에 잘못된 문자가 포함되어 있습니다.",
    "error-reset-otp-missing-id": "OTP 구성을 선택하세요.",
    invalidPasswordExistingMessage: "기존 비밀번호가 잘못되었습니다.",
    invalidPasswordBlacklistedMessage:
      "잘못된 비밀번호: 비밀번호가 블랙리스트에 등록되어 있습니다.",
    invalidPasswordConfirmMessage: "비밀번호 확인이 일치하지 않습니다.",
    invalidTotpMessage: "인증자 코드가 잘못되었습니다.",
    usernameExistsMessage: "사용자 이름이 이미 존재합니다.",
    emailExistsMessage: "이메일이 이미 존재합니다.",
    federatedIdentityExistsMessage:
      "{0} {1}의 사용자가 이미 존재합니다. 계정을 연결하려면 계정 관리에 로그인하세요.",
    federatedIdentityUnavailableMessage:
      "ID 공급자 {1}로 인증된 사용자 {0}이(가) 존재하지 않습니다. 관리자에게 문의하세요.",
    federatedIdentityUnmatchedEssentialClaimMessage:
      "ID 공급자가 발급한 ID 토큰이 구성된 필수 클레임과 일치하지 않습니다. 관리자에게 연락하십시오",
    confirmLinkIdpTitle: "계정이 이미 존재합니다.",
    federatedIdentityConfirmLinkMessage:
      "{0} {1}의 사용자가 이미 존재합니다. 어떻게 계속하시겠습니까?",
    federatedIdentityConfirmReauthenticateMessage:
      "귀하의 계정을 {0}에 연결하려면 인증하세요",
    nestedFirstBrokerFlowMessage:
      "{0} 사용자 {1}은(는) 알려진 사용자와 연결되어 있지 않습니다.",
    confirmLinkIdpReviewProfile: "프로필 검토",
    confirmLinkIdpContinue: "기존 계정에 추가",
    configureTotpMessage:
      "계정을 활성화하려면 모바일 인증기를 설정해야 합니다.",
    configureBackupCodesMessage:
      "계정을 활성화하려면 백업 코드를 설정해야 합니다.",
    updateProfileMessage:
      "계정을 활성화하려면 사용자 프로필을 업데이트해야 합니다.",
    updatePasswordMessage: "계정을 활성화하려면 비밀번호를 변경해야 합니다.",
    updateEmailMessage:
      "계정을 활성화하려면 이메일 주소를 업데이트해야 합니다.",
    resetPasswordMessage: "비밀번호를 변경해야 합니다.",
    verifyEmailMessage: "계정을 활성화하려면 이메일 주소를 확인해야 합니다.",
    linkIdpMessage:
      "귀하의 계정을 {0}과(와) 연결하려면 이메일 주소를 확인해야 합니다.",
    emailSentMessage: "곧 추가 지침이 포함된 이메일을 받게 됩니다.",
    emailSendErrorMessage:
      "이메일을 보내지 못했습니다. 나중에 다시 시도해 주세요.",
    accountUpdatedMessage: "계정이 업데이트되었습니다.",
    accountPasswordUpdatedMessage: "귀하의 비밀번호가 업데이트되었습니다.",
    delegationCompleteHeader: "로그인 성공",
    delegationCompleteMessage:
      "이 브라우저 창을 닫고 콘솔 애플리케이션으로 돌아갈 수 있습니다.",
    delegationFailedHeader: "로그인 실패",
    delegationFailedMessage:
      "이 브라우저 창을 닫고 콘솔 애플리케이션으로 돌아가서 다시 로그인해 보세요.",
    noAccessMessage: "접근 거부",
    invalidPasswordMinLengthMessage: "잘못된 비밀번호: 최소 길이 {0}.",
    invalidPasswordMaxLengthMessage: "잘못된 비밀번호: 최대 길이는 {0}입니다.",
    invalidPasswordMinDigitsMessage:
      "잘못된 비밀번호: 최소 {0}자리 숫자를 포함해야 합니다.",
    invalidPasswordMinLowerCaseCharsMessage:
      "잘못된 비밀번호: 최소 {0}개의 소문자를 포함해야 합니다.",
    invalidPasswordMinUpperCaseCharsMessage:
      "잘못된 비밀번호: 대문자 {0}자 이상을 포함해야 합니다.",
    invalidPasswordMinSpecialCharsMessage:
      "잘못된 비밀번호: 최소 {0}개의 특수 문자를 포함해야 합니다.",
    invalidPasswordNotUsernameMessage:
      "잘못된 비밀번호: 사용자 이름과 달라야 합니다.",
    invalidPasswordNotEmailMessage:
      "잘못된 비밀번호: 이메일과 동일해서는 안됩니다.",
    invalidPasswordRegexPatternMessage:
      "잘못된 비밀번호: 정규식 패턴과 일치하지 않습니다.",
    invalidPasswordHistoryMessage:
      "잘못된 비밀번호: 마지막 {0} 비밀번호와 동일하면 안 됩니다.",
    invalidPasswordGenericMessage:
      "잘못된 비밀번호: 새 비밀번호가 비밀번호 정책과 일치하지 않습니다.",
    failedToProcessResponseMessage: "응답을 처리하지 못했습니다.",
    httpsRequiredMessage: "HTTPS 필요",
    realmNotEnabledMessage: "영역이 활성화되지 않았습니다.",
    invalidRequestMessage: "잘못된 요청",
    successLogout: "로그아웃되었습니다",
    failedLogout: "로그아웃 실패",
    unknownLoginRequesterMessage: "알 수 없는 로그인 요청자",
    loginRequesterNotEnabledMessage: "로그인 요청자가 활성화되지 않았습니다.",
    bearerOnlyMessage:
      "Bearer 전용 애플리케이션은 브라우저 로그인을 시작할 수 없습니다.",
    standardFlowDisabledMessage:
      "클라이언트는 주어진 response_type으로 브라우저 로그인을 시작할 수 없습니다. 클라이언트에 대해 표준 흐름이 비활성화되었습니다.",
    implicitFlowDisabledMessage:
      "클라이언트는 주어진 response_type으로 브라우저 로그인을 시작할 수 없습니다. 클라이언트에 대한 암시적 흐름이 비활성화되었습니다.",
    invalidRedirectUriMessage: "잘못된 리디렉션 URI",
    unsupportedNameIdFormatMessage: "지원되지 않는 NameID 형식",
    invalidRequesterMessage: "잘못된 요청자",
    registrationNotAllowedMessage: "등록이 허용되지 않습니다",
    resetCredentialNotAllowedMessage: "자격 증명 재설정이 허용되지 않습니다.",
    permissionNotApprovedMessage: "허가가 승인되지 않았습니다.",
    noRelayStateInResponseMessage: "ID 공급자의 응답에 릴레이 상태가 없습니다.",
    insufficientPermissionMessage: "ID를 연결할 수 있는 권한이 부족합니다.",
    couldNotProceedWithAuthenticationRequestMessage:
      "ID 공급자에 대한 인증 요청을 진행할 수 없습니다.",
    couldNotObtainTokenMessage: "ID 공급자로부터 토큰을 얻을 수 없습니다.",
    unexpectedErrorRetrievingTokenMessage:
      "ID 공급자로부터 토큰을 검색하는 중에 예기치 않은 오류가 발생했습니다.",
    unexpectedErrorHandlingResponseMessage:
      "ID 공급자의 응답을 처리하는 중에 예기치 않은 오류가 발생했습니다.",
    identityProviderAuthenticationFailedMessage:
      "인증 실패. ID 공급자로 인증할 수 없습니다.",
    couldNotSendAuthenticationRequestMessage:
      "ID 공급자에게 인증 요청을 보낼 수 없습니다.",
    unexpectedErrorHandlingRequestMessage:
      "ID 공급자에 대한 인증 요청을 처리하는 중에 예기치 않은 오류가 발생했습니다.",
    invalidAccessCodeMessage: "잘못된 액세스 코드입니다.",
    sessionNotActiveMessage: "세션이 활성화되지 않았습니다.",
    invalidCodeMessage:
      "오류가 발생했습니다. 애플리케이션을 통해 다시 로그인해 주세요.",
    cookieNotFoundMessage:
      "쿠키를 찾을 수 없습니다. 귀하의 브라우저에서 쿠키가 활성화되어 있는지 확인하십시오.",
    insufficientLevelOfAuthentication:
      "요청한 인증 수준이 충족되지 않았습니다.",
    identityProviderUnexpectedErrorMessage:
      "ID 공급자로 인증할 때 예기치 않은 오류가 발생했습니다.",
    identityProviderMissingStateMessage:
      "ID 공급자의 응답에 상태 매개변수가 누락되었습니다.",
    identityProviderMissingCodeOrErrorMessage:
      "ID 공급자의 응답에 코드 또는 오류 매개변수가 누락되었습니다.",
    identityProviderInvalidResponseMessage:
      "ID 공급자의 응답이 잘못되었습니다.",
    identityProviderInvalidSignatureMessage:
      "ID 공급자의 응답에 잘못된 서명이 있습니다.",
    identityProviderNotFoundMessage:
      "해당 식별자가 있는 ID 공급자를 찾을 수 없습니다.",
    identityProviderLinkSuccess:
      "이메일을 성공적으로 확인했습니다. 원래 브라우저로 돌아가서 로그인을 계속하세요.",
    staleCodeMessage:
      "이 페이지는 더 이상 유효하지 않습니다. 애플리케이션으로 돌아가서 다시 로그인하세요.",
    realmSupportsNoCredentialsMessage:
      "영역은 자격 증명 유형을 지원하지 않습니다.",
    credentialSetupRequired: "로그할 수 없습니다. 자격 증명 설정이 필요합니다.",
    identityProviderNotUniqueMessage:
      "Realm은 여러 ID 공급자를 지원합니다. 인증에 어떤 ID 공급자를 사용해야 하는지 결정할 수 없습니다.",
    emailVerifiedMessage: "귀하의 이메일 주소가 확인되었습니다.",
    staleEmailVerificationLink:
      "클릭하신 링크는 오래된 링크이므로 더 이상 유효하지 않습니다. 어쩌면 이미 이메일을 확인했을 수도 있습니다.",
    identityProviderAlreadyLinkedMessage:
      "{0}에서 반환한 제휴 ID는 이미 다른 사용자에게 연결되어 있습니다.",
    confirmAccountLinking:
      "ID 공급업체 {1}의 {0} 계정을 귀하의 계정과 연결하는지 확인하세요.",
    confirmEmailAddressVerification: "이메일 주소 {0}의 유효성을 확인하세요.",
    confirmExecutionOfActions: "다음 작업을 수행합니다.",
    locale_ar: "عربي",
    locale_ca: "Català",
    locale_cs: "Čeština",
    locale_da: "Dansk",
    locale_de: "Deutsch",
    locale_en: "English",
    locale_es: "Español",
    locale_fi: "Suomi",
    locale_fr: "Français",
    locale_hu: "Magyar",
    locale_it: "Italiano",
    locale_ja: "日本語",
    locale_lt: "Lietuvių",
    locale_lv: "Latviešu",
    locale_nl: "Nederlands",
    locale_no: "Norsk",
    locale_pl: "Polski",
    locale_pt_BR: "Português (Brasil)",
    locale_ru: "Русский",
    locale_sk: "Slovenčina",
    locale_sv: "Svenska",
    locale_th: "ไทย",
    locale_tr: "Türkçe",
    "locale_zh-CN": "中文简体",
    backToApplication: "&laquo; 지원서로 돌아가기",
    missingParameterMessage: "누락된 매개변수: {0}",
    clientNotFoundMessage: "클라이언트를 찾을 수 없습니다.",
    clientDisabledMessage: "클라이언트가 비활성화되었습니다.",
    invalidParameterMessage: "잘못된 매개변수: {0}",
    alreadyLoggedIn: "귀하는 이미 로그인하셨습니다.",
    differentUserAuthenticated:
      "이 세션에서 이미 다른 사용자 ''{0}''으로 인증되었습니다. 먼저 로그아웃하세요.",
    brokerLinkingSessionExpired:
      "중개인 계정 연결을 요청했지만 현재 세션이 더 이상 유효하지 않습니다.",
    proceedWithAction: "&raquo; 계속하려면 여기를 클릭하세요.",
    acrNotFulfilled: "인증 요구 사항이 충족되지 않았습니다.",
    "requiredAction.CONFIGURE_TOTP": "OTP 구성",
    "requiredAction.TERMS_AND_CONDITIONS": "이용약관",
    "requiredAction.UPDATE_PASSWORD": "비밀번호 업데이트",
    "requiredAction.UPDATE_PROFILE": "프로필 업데이트",
    "requiredAction.VERIFY_EMAIL": "이메일 확인",
    "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "복구 코드 생성",
    "requiredAction.webauthn-register-passwordless":
      "Webauthn 비밀번호 없이 등록",
    invalidTokenRequiredActions: "링크에 포함된 필수 조치가 유효하지 않습니다.",
    doX509Login: "다음 계정으로 로그인됩니다:",
    clientCertificate: "X509 클라이언트 인증서:",
    noCertificate: "[증명서 없음]",
    pageNotFound: "페이지를 찾을 수 없습니다",
    internalServerError: "내부 서버 오류가 발생했습니다",
    "console-username": "사용자 이름:",
    "console-password": "비밀번호:",
    "console-otp": "일회성 암호:",
    "console-new-password": "새 비밀번호:",
    "console-confirm-password": "비밀번호 확인:",
    "console-update-password": "비밀번호를 업데이트해야 합니다.",
    "console-verify-email":
      "이메일 주소를 확인해야 합니다. 인증 코드가 포함된 이메일을 {0}(으)로 보냈습니다. 입력란에 이 코드를 입력하세요.",
    "console-email-code": "이메일 코드:",
    "console-accept-terms": "약관 동의? [예/아니요]:",
    "console-accept": "예",
    "openshift.scope.user_info": "사용자 정보",
    "openshift.scope.user_check-access": "사용자 접속 정보",
    "openshift.scope.user_full": "전체 권한",
    "openshift.scope.list-projects": "프로젝트 나열",
    "saml.post-form.title": "인증 리디렉션",
    "saml.post-form.message": "리디렉션 중입니다. 잠시 기다려 주세요.",
    "saml.post-form.js-disabled":
      "자바스크립트가 비활성화되었습니다. 활성화하는 것이 좋습니다. 계속하려면 아래 버튼을 클릭하세요.",
    "saml.artifactResolutionServiceInvalidResponse":
      "아티팩트를 해결할 수 없습니다.",
    "otp-display-name": "인증자 신청",
    "otp-help-text": "인증신청에서 인증번호를 입력하세요.",
    "otp-reset-description": "어떤 OTP 구성을 제거해야 합니까?",
    "password-display-name": "비밀번호",
    "password-help-text": "비밀번호를 입력하여 로그인하세요.",
    "auth-username-form-display-name": "사용자 이름",
    "auth-username-form-help-text":
      "사용자 이름을 입력하여 로그인을 시작하세요",
    "auth-username-password-form-display-name": "사용자 이름과 비밀번호",
    "auth-username-password-form-help-text":
      "사용자 이름과 비밀번호를 입력하여 로그인하세요.",
    "auth-recovery-authn-code-form-display-name": "복구 인증 코드",
    "auth-recovery-authn-code-form-help-text":
      "이전에 생성된 목록에서 복구 인증 코드를 입력하세요.",
    "auth-recovery-code-info-message": "지정된 복구 코드를 입력하세요.",
    "auth-recovery-code-prompt": "복구 코드 #{0}",
    "auth-recovery-code-header": "복구 인증 코드로 로그인",
    "recovery-codes-error-invalid": "잘못된 복구 인증 코드",
    "recovery-code-config-header": "복구 인증 코드",
    "recovery-code-config-warning-title":
      "이 복구 코드는 이 페이지를 떠난 후에는 다시 표시되지 않습니다.",
    "recovery-code-config-warning-message":
      "비밀번호 관리자에 인쇄, 다운로드 또는 복사하여 저장해 두세요. 이 설정을 취소하면 삭제됩니다.",
    "recovery-codes-print": "인쇄",
    "recovery-codes-download": "다운로드",
    "recovery-codes-copy": "복사",
    "recovery-codes-copied": "복사됨",
    "recovery-codes-confirmation-message":
      "이 코드를 안전한 곳에 저장해 두었어요",
    "recovery-codes-action-complete": "설정 완료",
    "recovery-codes-action-cancel": "설정 취소",
    "recovery-codes-download-file-header":
      "복구 코드를 안전한 곳에 보관하세요.",
    "recovery-codes-download-file-description":
      "복구 코드는 귀하가 귀하의 계정에 액세스할 수 없는 경우 귀하의 계정에 로그인할 수 있도록 해주는 일회용 비밀번호입니다.",
    "recovery-codes-download-file-date":
      "이 코드는 다음 날짜에 생성되었습니다.",
    "recovery-codes-label-default": "복구 코드",
    "webauthn-display-name": "보안 키",
    "webauthn-help-text": "보안 키를 사용하여 로그인하세요.",
    "webauthn-passwordless-display-name": "보안 키",
    "webauthn-passwordless-help-text":
      "비밀번호 없이 로그인하려면 보안 키를 사용하세요.",
    "webauthn-login-title": "보안키 로그인",
    "webauthn-registration-title": "보안키 등록",
    "webauthn-available-authenticators": "사용 가능한 보안 키",
    "webauthn-unsupported-browser-text":
      "이 브라우저에서는 WebAuthn이 지원되지 않습니다. 다른 것을 시도하거나 관리자에게 문의하세요.",
    "webauthn-doAuthenticate": "보안 키로 로그인",
    "webauthn-createdAt-label": "만들어진",
    "webauthn-error-title": "보안 키 오류",
    "webauthn-error-registration": "보안 키를 등록하지 못했습니다.<br/> {0}",
    "webauthn-error-api-get": "보안 키로 인증하지 못했습니다.<br/> {0}",
    "webauthn-error-different-user":
      "최초 인증된 사용자는 보안키로 인증된 사용자가 아닙니다.",
    "webauthn-error-auth-verification":
      "보안 키 인증 결과가 잘못되었습니다.<br/> {0}",
    "webauthn-error-register-verification":
      "보안키 등록 결과가 잘못되었습니다.<br/> {0}",
    "webauthn-error-user-not-found":
      "보안 키로 인증된 알 수 없는 사용자입니다.",
    "identity-provider-redirector": "다른 ID 공급자와 연결",
    "identity-provider-login-label": "또는 다음으로 로그인하세요.",
    "idp-email-verification-display-name": "이메일 확인",
    "idp-email-verification-help-text": "이메일을 확인하여 계정을 연결하세요.",
    "idp-username-password-form-display-name": "사용자 이름과 비밀번호",
    "idp-username-password-form-help-text": "로그인하여 계정을 연결하세요.",
    finalDeletionConfirmation:
      "계정을 삭제하면 복원할 수 없습니다. 계정을 유지하려면 취소를 클릭하세요.",
    irreversibleAction: "이 작업은 되돌릴 수 없습니다.",
    deleteAccountConfirm: "계정 삭제 확인",
    deletingImplies: "계정 삭제는 다음을 의미합니다.",
    errasingData: "모든 데이터 삭제",
    loggingOutImmediately: "즉시 로그아웃",
    accountUnusable: "이 계정으로는 이후에 애플리케이션을 사용할 수 없습니다.",
    userDeletedSuccessfully: "사용자가 삭제되었습니다.",
    "access-denied": "접근 불가",
    "access-denied-when-idp-auth":
      "{0}으로 인증하는 동안 액세스가 거부되었습니다.",
    "frontchannel-logout.title": "로그 아웃하다",
    "frontchannel-logout.message": "다음 앱에서 로그아웃 중입니다.",
    logoutConfirmTitle: "로그 아웃하다",
    logoutConfirmHeader: "로그아웃하시겠습니까?",
    doLogout: "로그 아웃",
    readOnlyUsernameMessage:
      "사용자 이름은 읽기 전용이므로 업데이트할 수 없습니다.",
    alphanumericalCharsOnly: "",
  },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
