DELIMITER //
CREATE OR REPLACE PROCEDURE get_categories()
BEGIN
  SELECT 
    * 
  FROM 
    category;
END; 
//

DELIMITER ;