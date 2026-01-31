// ⚠️ IMPORTANTE: Las claves ANON de Supabase son PÚBLICAS por diseño
// La seguridad se maneja con Row Level Security (RLS) en Supabase
// NO intentes "ocultar" esta clave - está diseñada para ser visible en el cliente

const SUPABASE_CONFIG = {
  url: "https://eurobrvauarexooknbpi.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cm9icnZhdWFyZXhvb2tuYnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMzg2NjUsImV4cCI6MjA1MzkxNDY2NX0.lGZH5Qy7dOmQqvKC0vTcr_MaLLVJy_4zHyN6P4F8Xzg"
};

// Para proteger tu base de datos, configura RLS en Supabase:
// 1. Ve a Authentication > Policies en tu proyecto Supabase
// 2. Crea políticas para la tabla 'rsvp'
// Ejemplo de política segura:
// - INSERT: true (permitir a todos insertar)
// - SELECT: false o auth.uid() = user_id (solo el dueño puede ver)
// - UPDATE/DELETE: false o con auth (evitar modificaciones no autorizadas)
