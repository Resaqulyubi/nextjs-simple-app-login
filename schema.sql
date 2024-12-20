CREATE DATABASE IF NOT EXISTS academic_db;
USE academic_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a test user (password is 'admin')
INSERT INTO users (username, password, email) 
VALUES ('admin', '$2a$10$mj1OMFvVmGAR4gEEXZGtA.R5wYtQelXrYrLLVk5BdQ5.sKz8Fb8ti', 'admin@example.com')
ON DUPLICATE KEY UPDATE username=username;
