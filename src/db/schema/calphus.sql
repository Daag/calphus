CREATE DATABASE calphus;

USE calphus;

CREATE TABLE IF NOT EXISTS rarity (
    id                      INT             NOT NULL,
    name                    NVARCHAR(50)    NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS category (
    id                      INT             NOT NULL,
    name                    NVARCHAR(50)    NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS magic_item (
    id                      BIGINT          NOT NULL AUTO_INCREMENT,
    name                    NVARCHAR(50)    NOT NULL,
    category_id             INT             NOT NULL,
    sub_category            NVARCHAR(50)    NULL,
    rarity_id               INT             NOT NULL,
    description             TEXT            NOT NULL,
    attunement              BOOLEAN         NOT NULL DEFAULT (0),
    attunement_requirement  NVARCHAR(100)   NULL,
    PRIMARY KEY(id),
    CONSTRAINT `fk_magic_item_category`
		FOREIGN KEY (category_id) REFERENCES category (id),
    CONSTRAINT `fk_magic_item_rarity`
		FOREIGN KEY (rarity_id) REFERENCES rarity (id)
);
