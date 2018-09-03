USE calphus;

ALTER TABLE rarity (
    id                      BIGINT          NOT NULL,
    name                    NVARCHAR(50)    NOT NULL,
    PRIMARY KEY(id)
);