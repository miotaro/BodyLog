## users テーブル

| Column             | Type    | Options     |
| ------------------ | ------- | ----------- |
| name               | string  | null: false |
| email              | string  | null: false, unique: true |
| encrypted_password | string  | null: false |
| height             | integer | null: false |
| mark               | integer |
| memo               | text    |

- has_many :weights

## weights テーブル

| Column | Type    | Options     |
| ------ | ------- | ----------- |
| weight | integer | null: false |
| bmi    | integer | null: false |

- belongs_to :user

postgresql://bodylog_production_user:JZGmUYzssrH9TK7q6CAYvtlWcr5n8KEN@dpg-cuu6nq0gph6c73ab0o3g-a/bodylog_production