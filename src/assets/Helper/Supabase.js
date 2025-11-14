/* import {createClient} from "@supabase/supabase-js"

const supabaseUrl = "https://babkqmoesotdqouujgyj.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhYmtxbW9lc290ZHFvdXVqZ3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMzE1NDYsImV4cCI6MjA3NzYwNzU0Nn0.8lTtELjkMioibp3UMLIWPsiAkQ8tBm6k5KKbROA9FSU"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase */

import {createClient} from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase


