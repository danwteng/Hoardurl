CREATE TABLE hoardedurls (
  hoardedurls_id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  description VARCHAR(300),
  url VARCHAR(2048)
)

-- inserting information
INSERT INTO hoardedurls (title, description, url) VALUES ('anotherTitle', 'another description', 'another url') RETURNING *;