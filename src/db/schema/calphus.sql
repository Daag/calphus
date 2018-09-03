CREATE DATABASE calphus;

USE calphus;

CREATE TABLE IF NOT EXISTS magic_item (
    id                      BIGINT          NOT NULL AUTO_INCREMENT,
    name                    NVARCHAR(50)    NOT NULL,
    type                    INT             NOT NULL,
    subtype                 NVARCHAR(50)    NULL,
    rarity                  INT             NOT NULL,
    description             TEXT            NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS magic_item_rarity (
    id                      BIGINT          NOT NULL,
    name                    NVARCHAR(50)    NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS magic_item_type (
    id                      BIGINT          NOT NULL,
    name                    NVARCHAR(50)    NOT NULL,
    PRIMARY KEY(id)
);