# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150318152727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "course_data", force: :cascade do |t|
    t.string   "name",        limit: 255,                null: false
    t.integer  "template_id",                            null: false
    t.text     "data"
    t.integer  "pr_type",                 default: 0
    t.integer  "course_id",                              null: false
    t.boolean  "enabled",                 default: true
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "url_name",    limit: 255,                null: false
    t.integer  "order"
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name",        limit: 255,                null: false
    t.integer  "pr_type",                 default: 0,    null: false
    t.string   "url",         limit: 255
    t.text     "metadata"
    t.integer  "parent_id",               default: 0
    t.integer  "template_id",             default: 0
    t.boolean  "enabled",                 default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "grades_schemes", force: :cascade do |t|
    t.string   "name",                      null: false
    t.integer  "stage",                     null: false
    t.text     "scheme",                    null: false
    t.boolean  "enabled",    default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "templates", force: :cascade do |t|
    t.string   "name",        limit: 255,                null: false
    t.string   "tag",         limit: 255,                null: false
    t.text     "description"
    t.integer  "pr_type",                 default: 0,    null: false
    t.boolean  "enabled",                 default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_progresses", force: :cascade do |t|
    t.string   "name",          limit: 255,             null: false
    t.float    "grade"
    t.string   "user_id",       limit: 255,             null: false
    t.integer  "current_grade",                         null: false
    t.text     "metadata"
    t.integer  "pr_type",                   default: 0
    t.integer  "parent_id",                 default: 0
    t.boolean  "enabled"
    t.boolean  "current"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                  null: false
    t.string   "first_name",                                null: false
    t.string   "middle_name"
    t.string   "surnames",                                  null: false
    t.integer  "personal_id",                               null: false
    t.string   "gender",          limit: 1,                 null: false
    t.string   "email",                                     null: false
    t.string   "telephone",       limit: 20
    t.string   "mobile_phone",    limit: 20
    t.integer  "role",            limit: 2,  default: 3
    t.boolean  "enabled",                    default: true
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.json     "metadata"
    t.string   "password_digest"
    t.string   "image",           limit: 50
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
