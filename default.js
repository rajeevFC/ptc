'use strict';

// Default specific configuration
module.exports = {
  // Environment setup
  env: '/sales/management-dashboard',

  //Node.js configuration
  nodejs: {
    port: 80,
    httpsPort: 443,
  },

  // DashDB connection options
  dashdb: {
    dsn:
      'DATABASE=SKYLINE;HOSTNAME=192.168.99.100;PORT=50000;PROTOCOL=TCPIP;UID=db2inst1;PWD=skyl1ne;',
    schema: 'SMS_APP_WEB',
  },

  //default user for NO_AUTHENTICATION PROFILE

  defaultUser: {
    id: 'tjambula@in.ibm.com',
    _json: {
      firstName: 'Ashok',
      blueGroups: ['ARDE_ALL'],
      uid: '07820E744',
    },
  },

  //REST API connections
  apis: {
    pureAppUrl: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/esa-skyline-ibm-dev/apidev',
    accessHubApiUrl:
      'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/esa-skyline-ibm-dev/apidev/accessHub/getAccessDetails', 

    CEDPApi: {
      secretKey:
        'erSgxz6dyI+mA2kBCyuCDi+QprpQ2jk2ZeqnZnWhBPfKiLMx9jJxT5LciiyxfYPE',
      SignatureKey: 'vhqvp4tY3kGam4iwfB6r6NeQMhYHoW8z',
    },

    ppa: {
      tokenURL: 'https://ppa-api.epm-sales-production.us-south.containers.appdomain.cloud/login',
      tokenUser: 'isd_access',
      tokenUsrPwd: 'NTQ2ND',
      graphUrl: 'https://ppa-api.epm-sales-production.us-south.containers.appdomain.cloud/api',
    },

    ES: {
      URLS: [
        'https://C-N2UL897@nomail.relay.ibm.com:Y9hmv3tx3*@prdcedpk8s21.w3-969.ibm.com:9200/',
        'https://C-N2UL897@nomail.relay.ibm.com:Y9hmv3tx3*@prdcedpk8s22.w3-969.ibm.com:9200/',
        'https://C-N2UL897@nomail.relay.ibm.com:Y9hmv3tx3*@prdcedpk8s23.w3-969.ibm.com:9200/',
        'https://C-N2UL897@nomail.relay.ibm.com:Y9hmv3tx3*@prdcedpk8s24.w3-969.ibm.com:9200/',
        'https://C-N2UL897@nomail.relay.ibm.com:Y9hmv3tx3*@prdcedpk8s25.w3-969.ibm.com:9200/',
      ],
    },
  },

  //w3 Authentication, SSO configuration
  ibmsso: {
    noAuthentication: true,
    callbackURL: '/oidcstrategyweb',
    authorizationURL:
      'https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize',
    tokenURL:
      'https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/token',
    clientID: 'NWJjNGNjYTgtNWZjNy00',
    scope: 'openid',
    responseType: 'code',
    clientSecret: 'NmU3NDZlY2MtMzRjZC00',
    skipUserProfile: true,
    issuer: 'https://w3id.alpha.sso.ibm.com/isam',
    addCACert: true,
    CACertPathList: [
      '/config/certs/oidc_w3id_staging.cer',
      '/config/certs/w3idIntermediateSymantecClass3SecureServerCA-G4.pem',
      '/config/certs/w3idRootVeriSignClass3PublicPrimaryCertificationAuthority-G5.pem',
    ],
    passReqToCallback: true,
  },

  //w3 picture REST call
  w3: {
    pictureURL: 'https://w3.api.ibm.com/common/run/bluepages/photo?cnum=',
    xclientid: '718f41ac-437e-45b1-b54b-2d01eec46a3b',
  },
};
