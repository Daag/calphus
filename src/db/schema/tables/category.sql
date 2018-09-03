USE calphus;

ALTER TABLE category (
    id                      BIGINT          NOT NULL,
    name                    NVARCHAR(50)    NOT NULL,
    PRIMARY KEY(id)
);