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

