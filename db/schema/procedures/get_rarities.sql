DELIMITER //
CREATE OR REPLACE PROCEDURE get_rarities()
BEGIN
  SELECT 
    * 
  FROM 
    rarity;
END; 
//

DELIMITER ;