Package.describe({
  summary: 'A reactive table designed for Meteor',
  version: '0.8.14',
  name: 'ccapcom:reactive-table',
  git: '',
  documentation: 'README.md'
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use('templating', 'client');
    api.use('jquery', 'client');
    api.use('underscore', 'client');
    api.use('reactive-var@1.0.3', 'client');
    api.use("anti:i18n@0.4.3", 'client');
    api.use("mongo@1.0.8", ["server", "client"]);

    api.use("fortawesome:fontawesome@4.2.0", 'client', {weak: true});

    api.add_files('lib/reactive_table.html', 'client');
    api.add_files('lib/filter.html', 'client');
    api.add_files('lib/reactive_table_i18n.js', 'client');
    api.add_files('lib/reactive_table.js', 'client');
    api.add_files('lib/reactive_table.css', 'client');
    api.add_files('lib/sort.js', 'client');
    api.add_files('lib/filter.js', ['client', 'server']);
    api.add_files('lib/server.js', 'server');

    api.export("ReactiveTable", ["client", "server"]);
});

Package.on_test(function (api) {
    api.use('templating', 'client');
    api.use('jquery', 'client');
    api.use('underscore', ['client', 'server']);
    api.use('reactive-var@1.0.3', 'client');
    api.use("anti:i18n@0.4.3", 'client');
    api.use("mongo", ["server", "client"]);
    api.use("check", "server");
    api.use("audit-argument-checks", "server");

    api.add_files('lib/reactive_table.html', 'client');
    api.add_files('lib/filter.html', 'client');
    api.add_files('lib/reactive_table_i18n.js', 'client');
    api.add_files('lib/reactive_table.js', 'client');
    api.add_files('lib/reactive_table.css', 'client');
    api.add_files('lib/sort.js', 'client');
    api.add_files('lib/filter.js', ['client', 'server']);
    api.add_files('lib/server.js', 'server');

    api.export("ReactiveTable", ["client", "server"]);
});
