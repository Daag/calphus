USE calphus;

ALTER TABLE magic_item (
    id                      BIGINT          NOT NULL AUTO_INCREMENT,
    name                    NVARCHAR(50)    NOT NULL,
    type                    INT             NOT NULL,
    subtype                 NVARCHAR(50)    NULL,
    rarity                  INT             NOT NULL,
    description             TEXT            NOT NULL,
    PRIMARY KEY(id)
);