import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('./datas.db');

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
function deletData(name) {
    startDataBase();
    db.transaction(
        tx => {
            tx.executeSql("delete from persona where nome = ?;",
                [name]);
        },
        null,
        this.update
    );
}

function getDataBase(data) {
    startDataBase();
    db.transaction(
        (tx) => {
            tx.executeSql("select * from persona", [], (_, { rows: { _array } }) =>
                data({ items: _array })
            );
        },
        null,
        this.update
    );
}


function updateAndress(nome, rua, numero, bairro) {

    if (nome && rua && numero && bairro) {
        startDataBase();
        db.transaction(
            tx => {
                tx.executeSql("update persona set rua = ?, numero = ? , bairro = ? where nome = ?;",
                    [rua, numero, bairro, nome])
            },
            null,
            this.update
        );
    } else {
        return null
    }

}

function updateArticle(article, name) {
    if (article && name) {
        startDataBase();
        db.transaction(
            tx => {
                tx.executeSql("update persona set artigo = ? where nome = ?;",
                    [article, name])
            },
            null,
            this.update
        );

    } else {
        return null
    }
}




module.exports = { insertDataBase, getDataBase, deletData };