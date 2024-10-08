// created this file to be added to the console if minimized css styles are not picked up

const style = document.createElement("style");
style.innerHTML = `
    #page-content #content-top {
    width: 890px !important;
    padding: 0 !important;
  }

  #nolopath {
    justify-content: space-between;
    min-height: 475px;
  }

  #nolopath .panel-nolopath .form-questions label {
    font-weight: 600 !important;
    display: flex;
    gap: 5px;
  }

  #nolopath .panel-nolopath select#nolopath-q1066:hover,
  #nolopath .panel-nolopath select#nolopath-q1066:focus {
    border: 1px solid #006FBB !important;
    outline: none;
  }

  #nolopath-form {
    padding: 35px !important;
  }

  #nolopath .panel-nolopath .form-questions {
    width: auto !important;
    padding: 0 !important;
  }

  #nolopath .panel-nolopath .btn-group-justified {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  }

  #nolopath .panel-nolopath .btn-group-justified .btn-group:first-child {
    flex: 0.5;
    margin-right: 0 !important;
  }

  #nolopath .panel-nolopath .btn-group-justified .btn-group:last-child {
    flex: 0.5;
    margin-right: 0 !important;
  }

  #nolopath .panel-nolopath .btn-group .btn-group button {
    width: 100% !important;
    text-align: left;
  }

  #nolopath .panel-nolopath .form-actions .form-action-submit {
    width: 100%;
    background: #f3aa50 !important;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  #nolopath .panel-nolopath .form-actions {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
  }

  #nolopath .has-error .inline-error {
    min-height: 25px;
  }


  #nolopath .panel-nolopath .form-control {
    border: 2px solid #e1e1e1 !important;
  }

  #nolopath .panel-nolopath {
    flex: .6;
  }

  #panel-sidebar {
    flex: .4;
    padding: 20px;
  }

  #panel-sidebar .sidebar-header {
    font-size: 28px;
    font-weight: 700;
  }

  .form-disclaimer label.terms-agreement-2 {
    display: none;
  }

  #nolopath-form .form-disclaimer {
    padding: 0 !important;
    margin-bottom: 30px;
  }

  .panel-nolopath fieldset {
    display: flex;
    flex-flow: column wrap;
    gap: 20px;

  }

  #panel-sidebar .sidebar-subcaption {
    margin-top: 25px !important;
    font-size: 18px;
    color: #272727;
  }

  #panel-sidebar .sidebar-icons {
    justify-content: space-between;
    position: static;
    margin-top: 10px;
    width: 100%;
  }

  #panel-sidebar .sidebar-icons .accredited-business {
    order: 2;
  }

  #panel-sidebar .sidebar-icons .norton-trust {
    order: 1;
    width: 59px;
    height: 34px;
  }

  .google-trust-reviews .gstars {
    left: 8px;
  }

  .google-trust-reviews>label {
    display: none;
  }

  #panel-sidebar .sidebar-icons .google-trust-reviews {
    order: 0;
  }

  #page-ft .mobile-footer-icons {
    display: none;
  }

  .mobile-sidebar-subcaption,
  .mobile-sidebar-icons {
    display: none;
  }

  .input-name-step-5 {
    display: flex;
    gap: 20px;
  }

  #panel-sidebar .mobile-subNotification {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;

    color: inherit;
    margin: 15px 0;

  }

  .mobile-subNotification {
    display: none
  }


  .lg-subNotification {
    display: none
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.8px;
    color: inherit;
    margin: 15px 0;
  }

  /* MEDIUM SCREEN */

  @media (max-width: 1199px) {

   .lg-subNotification {
    display: none;
}

    .mobile-subNotification {
      display: block
    }

    .mobile-sidebar-subcaption {
      display: block;
    }

    .mobile-sidebar-icons {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      flex-flow: row wrap;
    }


    .mobile-sidebar-icons .accredited-business {
      order: 2;
    }

    .mobile-sidebar-icons .norton-trust {
      order: 1;
      width: 59px;
      height: 34px;
    }


    .mobile-sidebar-icons .google-trust-reviews {
      order: 0;
    }

    .caption-underline {
      display: none
    }

    #nolopath .panel-nolopath {
      box-shadow: none
    }

    #nolopath-form {
      padding: 0 !important;
    }

    #panel-sidebar .sidebar-subcaption {
      display: none
    }

    .btn-sem-form-submit {
      display: block;
      width: 100%;
      margin-bottom: 20px;
    }


    .sidebar-subcaption,
    .sidebar-icons {
      display: block;
      width: 100%;
      margin: 20px 0;

    }


    .btn-sem-form-submit+.sidebar-subcaption,
    .sidebar-subcaption+.sidebar-icons {
      margin-top: 15px;
    }
  }

  /* SMALL SCREEN */

  @media (max-width: 569px) {

    .sidebar-header .visible-xs {
      font-size: 26px;
    }

    #nolopath {
      padding: 15px !important;
    }

    .page-nolosem-ssdi-api4 #nolopath .panel-nolopath .form-step-1 .form-item#form-item-q1067 .btn-group.btn-group-justified {
      display: flex
    }

    #panel-sidebar p {
      margin: 20px 0 !important;
    }

    .input-name-step-5 {
      flex-flow: row wrap;
    }

  }

  /* XS SCREEN */
  @media (max-width: 347px) {

    .sidebar-header .visible-xs {
      font-size: 24px;
    }

    .mobile-sidebar-icons {
      justify-content: space-around;
    }

    #nolopath {
      padding: 4px !important;
    }

  }

`;

document.head.appendChild(style);
