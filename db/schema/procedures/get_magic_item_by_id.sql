DELIMITER //
CREATE OR REPLACE PROCEDURE get_magic_item_by_id(
  IN      p_id            BIGINT
)
BEGIN
  SELECT 
    mi.id,
    mi.name,
    mi.category_id,
    c.name AS category_name,
    mi.sub_category,
    mi.rarity_id,
    r.name AS rarity_name,
    mi.description,
    mi.attunement,
    mi.attunement_requirement 
  FROM 
    magic_item mi
  LEFT JOIN 
    category c ON (c.id = mi.category_id)
  LEFT JOIN
    rarity r ON (r.id = mi.rarity_id)
  WHERE
    mi.id = p_id;
END; 
//

DELIMITER ;