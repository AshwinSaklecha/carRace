// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://uyjycyghbdoxbxstedsi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5anljeWdoYmRveGJ4c3RlZHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1MzMyOTEsImV4cCI6MjA0MTEwOTI5MX0.u94whU7iV2ldKuZuHldK5SL_MUWHDw_VjRysOsGa_pw'
);

export { supabase };