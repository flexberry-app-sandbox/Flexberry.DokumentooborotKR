import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDokumentooborotKRАвПользователиLForm from './forms/i-i-s-dokumentooborot-k-r-ав-пользователи-l';
import IISDokumentooborotKRВходВСистемуLForm from './forms/i-i-s-dokumentooborot-k-r-вход-в-систему-l';
import IISDokumentooborotKRДолжностиLForm from './forms/i-i-s-dokumentooborot-k-r-должности-l';
import IISDokumentooborotKRРасДокLForm from './forms/i-i-s-dokumentooborot-k-r-рас-док-l';
import IISDokumentooborotKRСотрудникиLForm from './forms/i-i-s-dokumentooborot-k-r-сотрудники-l';
import IISDokumentooborotKRФормаДокументаLForm from './forms/i-i-s-dokumentooborot-k-r-форма-документа-l';
import IISDokumentooborotKRХрДокLForm from './forms/i-i-s-dokumentooborot-k-r-хр-док-l';
import IISDokumentooborotKRАвПользователиEForm from './forms/i-i-s-dokumentooborot-k-r-ав-пользователи-e';
import IISDokumentooborotKRВходВСистемуEForm from './forms/i-i-s-dokumentooborot-k-r-вход-в-систему-e';
import IISDokumentooborotKRДолжностиEForm from './forms/i-i-s-dokumentooborot-k-r-должности-e';
import IISDokumentooborotKRРасДокEForm from './forms/i-i-s-dokumentooborot-k-r-рас-док-e';
import IISDokumentooborotKRСотрудникиEForm from './forms/i-i-s-dokumentooborot-k-r-сотрудники-e';
import IISDokumentooborotKRФормаДокументаEForm from './forms/i-i-s-dokumentooborot-k-r-форма-документа-e';
import IISDokumentooborotKRХрДокEForm from './forms/i-i-s-dokumentooborot-k-r-хр-док-e';
import IISDokumentooborotKRАвПользователиModel from './models/i-i-s-dokumentooborot-k-r-ав-пользователи';
import IISDokumentooborotKRВходВСистемуModel from './models/i-i-s-dokumentooborot-k-r-вход-в-систему';
import IISDokumentooborotKRДолжностиModel from './models/i-i-s-dokumentooborot-k-r-должности';
import IISDokumentooborotKRРасДокModel from './models/i-i-s-dokumentooborot-k-r-рас-док';
import IISDokumentooborotKRСотрудникиModel from './models/i-i-s-dokumentooborot-k-r-сотрудники';
import IISDokumentooborotKRТЧПользовательModel from './models/i-i-s-dokumentooborot-k-r-т-ч-пользователь';
import IISDokumentooborotKRТЧПраваModel from './models/i-i-s-dokumentooborot-k-r-т-ч-права';
import IISDokumentooborotKRТЧСоздДокModel from './models/i-i-s-dokumentooborot-k-r-т-ч-созд-док';
import IISDokumentooborotKRТЧУтвержДокModel from './models/i-i-s-dokumentooborot-k-r-т-ч-утверж-док';
import IISDokumentooborotKRФормаДокументаModel from './models/i-i-s-dokumentooborot-k-r-форма-документа';
import IISDokumentooborotKRХрДокModel from './models/i-i-s-dokumentooborot-k-r-хр-док';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot-k-r-ав-пользователи': IISDokumentooborotKRАвПользователиModel,
    'i-i-s-dokumentooborot-k-r-вход-в-систему': IISDokumentooborotKRВходВСистемуModel,
    'i-i-s-dokumentooborot-k-r-должности': IISDokumentooborotKRДолжностиModel,
    'i-i-s-dokumentooborot-k-r-рас-док': IISDokumentooborotKRРасДокModel,
    'i-i-s-dokumentooborot-k-r-сотрудники': IISDokumentooborotKRСотрудникиModel,
    'i-i-s-dokumentooborot-k-r-т-ч-пользователь': IISDokumentooborotKRТЧПользовательModel,
    'i-i-s-dokumentooborot-k-r-т-ч-права': IISDokumentooborotKRТЧПраваModel,
    'i-i-s-dokumentooborot-k-r-т-ч-созд-док': IISDokumentooborotKRТЧСоздДокModel,
    'i-i-s-dokumentooborot-k-r-т-ч-утверж-док': IISDokumentooborotKRТЧУтвержДокModel,
    'i-i-s-dokumentooborot-k-r-форма-документа': IISDokumentooborotKRФормаДокументаModel,
    'i-i-s-dokumentooborot-k-r-хр-док': IISDokumentooborotKRХрДокModel
  },

  'application-name': 'Информация о сотрудниках',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Информация о сотрудниках',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-dokumentooborot-k-r-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dokumentooborot-k-r-должности-l': {
            caption: 'Должности',
            title: ''
          }
        },
        'администратору-системы': {
          caption: 'Администратору системы',
          title: 'Администратору системы',
          'i-i-s-dokumentooborot-k-r-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-dokumentooborot-k-r-ав-пользователи-l': {
            caption: 'Авторизованные пользователи',
            title: 'Ав пользователи'
          }
        },
        пользователю: {
          caption: 'Пользователю',
          title: 'Пользователю',
          'i-i-s-dokumentooborot-k-r-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: 'Вход в систему'
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-dokumentooborot-k-r-форма-документа-l': {
              caption: 'Форма документа',
              title: 'Форма документа'
            },
            'i-i-s-dokumentooborot-k-r-рас-док-l': {
              caption: 'Рассмотренный документ',
              title: 'Рас док'
            },
            'i-i-s-dokumentooborot-k-r-хр-док-l': {
              caption: 'Хранение документов',
              title: 'Хр док'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-dokumentooborot-k-r-ав-пользователи-l': IISDokumentooborotKRАвПользователиLForm,
    'i-i-s-dokumentooborot-k-r-вход-в-систему-l': IISDokumentooborotKRВходВСистемуLForm,
    'i-i-s-dokumentooborot-k-r-должности-l': IISDokumentooborotKRДолжностиLForm,
    'i-i-s-dokumentooborot-k-r-рас-док-l': IISDokumentooborotKRРасДокLForm,
    'i-i-s-dokumentooborot-k-r-сотрудники-l': IISDokumentooborotKRСотрудникиLForm,
    'i-i-s-dokumentooborot-k-r-форма-документа-l': IISDokumentooborotKRФормаДокументаLForm,
    'i-i-s-dokumentooborot-k-r-хр-док-l': IISDokumentooborotKRХрДокLForm,
    'i-i-s-dokumentooborot-k-r-ав-пользователи-e': IISDokumentooborotKRАвПользователиEForm,
    'i-i-s-dokumentooborot-k-r-вход-в-систему-e': IISDokumentooborotKRВходВСистемуEForm,
    'i-i-s-dokumentooborot-k-r-должности-e': IISDokumentooborotKRДолжностиEForm,
    'i-i-s-dokumentooborot-k-r-рас-док-e': IISDokumentooborotKRРасДокEForm,
    'i-i-s-dokumentooborot-k-r-сотрудники-e': IISDokumentooborotKRСотрудникиEForm,
    'i-i-s-dokumentooborot-k-r-форма-документа-e': IISDokumentooborotKRФормаДокументаEForm,
    'i-i-s-dokumentooborot-k-r-хр-док-e': IISDokumentooborotKRХрДокEForm
  },

});

export default translations;
