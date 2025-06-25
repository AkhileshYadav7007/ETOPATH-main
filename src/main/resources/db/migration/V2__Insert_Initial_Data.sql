-- Insert Courses
INSERT INTO courses (id, name, description, duration, fee, original_price, level) VALUES
('starter-track', 'Starter Track', 'New sellers setting up their first store', '45 Days', 5999.00, 7999.00, 'Beginner'),
('growth-track', 'Growth Track', 'Sellers scaling to multiple platforms', '60 Days', 9999.00, 12999.00, 'Intermediate'),
('pro-track', 'Pro Track', 'Serious entrepreneurs building long-term brands', '90 Days', 15999.00, 19999.00, 'Advanced');

-- Insert Course Features for Starter Track
INSERT INTO course_features (course_id, feature) VALUES
('starter-track', 'Live training sessions'),
('starter-track', 'Real account implementation'),
('starter-track', 'Lifetime community access'),
('starter-track', 'GST and compliance training'),
('starter-track', 'Product listing optimization'),
('starter-track', 'Customer service fundamentals');

-- Insert Course Features for Growth Track
INSERT INTO course_features (course_id, feature) VALUES
('growth-track', 'Multi-platform management'),
('growth-track', 'Advanced advertising strategies'),
('growth-track', 'Brand building fundamentals'),
('growth-track', 'Analytics and reporting'),
('growth-track', 'Cross-platform logistics'),
('growth-track', 'Scaling strategies');

-- Insert Course Features for Pro Track
INSERT INTO course_features (course_id, feature) VALUES
('pro-track', 'Global marketplace expansion'),
('pro-track', 'Advanced brand building'),
('pro-track', 'International logistics'),
('pro-track', 'Advanced analytics and automation'),
('pro-track', 'Team management strategies'),
('pro-track', 'Enterprise-level strategies');

-- Insert Course Marketplaces
INSERT INTO course_marketplaces (course_id, marketplace) VALUES
('starter-track', 'Amazon.in');

INSERT INTO course_marketplaces (course_id, marketplace) VALUES
('growth-track', 'Amazon.in'),
('growth-track', 'Flipkart');

INSERT INTO course_marketplaces (course_id, marketplace) VALUES
('pro-track', 'Amazon.in'),
('pro-track', 'Flipkart'),
('pro-track', 'Meesho'),
('pro-track', 'Amazon Global');