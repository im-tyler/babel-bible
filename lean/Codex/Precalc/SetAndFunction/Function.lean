/-
  Codex.Precalc.SetAndFunction.Function

  Companion Lean file for `00.02.05 Function`.
  Lean's core type theory treats functions as primitive terms.
-/

namespace Codex.Precalc.SetAndFunction

universe u v w z

variable {A : Type u} {B : Type v} {C : Type w} {D : Type z}

/-- Function composition in elementary notation. -/
def comp (g : B -> C) (f : A -> B) : A -> C :=
  fun x => g (f x)

/-- Function composition is associative. -/
theorem comp_assoc (h : C -> D) (g : B -> C) (f : A -> B) :
    comp h (comp g f) = comp (comp h g) f :=
  rfl

/-- The identity function is a left identity for composition. -/
theorem id_comp (f : A -> B) :
    comp (fun y : B => y) f = f :=
  rfl

/-- The identity function is a right identity for composition. -/
theorem comp_id (f : A -> B) :
    comp f (fun x : A => x) = f :=
  rfl

end Codex.Precalc.SetAndFunction
