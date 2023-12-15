import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dokumentooborot-k-r-ав-пользователи-l');
  this.route('i-i-s-dokumentooborot-k-r-ав-пользователи-e',
  { path: 'i-i-s-dokumentooborot-k-r-ав-пользователи-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-ав-пользователи-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-ав-пользователи-e/new' });
  this.route('i-i-s-dokumentooborot-k-r-вход-в-систему-l');
  this.route('i-i-s-dokumentooborot-k-r-вход-в-систему-e',
  { path: 'i-i-s-dokumentooborot-k-r-вход-в-систему-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-вход-в-систему-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-вход-в-систему-e/new' });
  this.route('i-i-s-dokumentooborot-k-r-должности-l');
  this.route('i-i-s-dokumentooborot-k-r-должности-e',
  { path: 'i-i-s-dokumentooborot-k-r-должности-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-должности-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-должности-e/new' });
  this.route('i-i-s-dokumentooborot-k-r-рас-док-l');
  this.route('i-i-s-dokumentooborot-k-r-рас-док-e',
  { path: 'i-i-s-dokumentooborot-k-r-рас-док-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-рас-док-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-рас-док-e/new' });
  this.route('i-i-s-dokumentooborot-k-r-сотрудники-l');
  this.route('i-i-s-dokumentooborot-k-r-сотрудники-e',
  { path: 'i-i-s-dokumentooborot-k-r-сотрудники-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-сотрудники-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-сотрудники-e/new' });
  this.route('i-i-s-dokumentooborot-k-r-форма-документа-l');
  this.route('i-i-s-dokumentooborot-k-r-форма-документа-e',
  { path: 'i-i-s-dokumentooborot-k-r-форма-документа-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-форма-документа-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-форма-документа-e/new' });
  this.route('i-i-s-dokumentooborot-k-r-хр-док-l');
  this.route('i-i-s-dokumentooborot-k-r-хр-док-e',
  { path: 'i-i-s-dokumentooborot-k-r-хр-док-e/:id' });
  this.route('i-i-s-dokumentooborot-k-r-хр-док-e.new',
  { path: 'i-i-s-dokumentooborot-k-r-хр-док-e/new' });
});

export default Router;
