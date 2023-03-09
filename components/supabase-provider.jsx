"use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { createClient } from "../utils/supabase-browser";

// const Context = createContext();

// export default function SupabaseProvider({ children }) {
//   const [supabase] = useState(() => createClient());
//   const [session, setSession] = useState(null); // état local pour stocker la session

//   const refreshSession = async () => {
//     const { data: session, error } = await supabase.auth.getSession();
//     if (session) {
//       setSession(session);
//     }
//     if (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     refreshSession();
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       const accessToken = session?.access_token;
//       if (session) {
//         setSession(session);
//       } else {
//         setSession(null);
//       }
//       if (session?.access_token !== accessToken) {
//         router.refresh();
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [supabase]);

//   return (
//     <Context.Provider value={{ supabase }}>
//       <>{children}</>
//     </Context.Provider>
//   );
// }

// export const useSupabase = () => useContext(Context);
import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "../utils/supabase-browser";

const Context = createContext();

export default function SupabaseProvider({ children }) {
  const [supabase] = useState(() => createClient());
  const [session, setSession] = useState(null); // état local pour stocker la session

  useEffect(() => {
    // récupérer la session actuelle et la stocker dans l'état local
    const { data: session, error } = supabase.auth.getSession();
    if (session) {
      setSession(session);
    }
    if (error) {
      // gérer les erreurs de récupération de session ici
    }
  }, [supabase.auth]);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session ?? null);
      }
    );

    return () => {
      listener?.unsubscribe?.();
    };
  }, [supabase.auth]);

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => useContext(Context);
