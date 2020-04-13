import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('./data.db');

function startDataBase() {
    db.transaction((tx) => {
        tx.executeSql('create TABLE if NOT EXISTS persona(id INTERGER PRIMARY KEY, nome varchar(70) NOT NULL, rua varchar(60), numero varchar(20), bairro varchar(100), artigo varchar(30) NOT NULL, photo varchar(250));', null, (e) => { console.log(e) }, (a, erro) => { console.log(erro) });
    });
}

function insertDataBase(nome, rua, numero, bairro, artigo, photo) {
    startDataBase();
    db.transaction(
        tx => {
            tx.executeSql("insert into persona ( nome, rua , numero, bairro, artigo, photo) values ( ?,?,?,?,?,?);",
                [nome, rua, numero, bairro, artigo, photo]);
            tx.executeSql("select * from persona", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
            );
        },
        null,
        this.update
    );
}

function getDataBase() {
    startDataBase();
    db.transaction(
        (tx) => {
            tx.executeSql("select * from persona", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
            );
        },
        null,
        this.update
    );
}

module.exports = { insertDataBase, getDataBase };