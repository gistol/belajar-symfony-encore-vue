<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class VueController extends Controller
{
    /**
     * @Route("/counter-component", name="counter-component")
     */
    public function counter()
    {
        return $this->render('vue/counter.html.twig');
    }

    /**
     * @Route("/vue-directive", name="vue-directive")
     */
    public function directive()
    {
        return $this->render('vue/directive.html.twig');
    }

    /**
     * @Route("/vue-model", name="vue-model")
     */
    public function model()
    {
        return $this->render('vue/model.html.twig');
    }

    /**
     * @Route("/vue-hook", name="vue-hook")
     */
    public function hook()
    {
        return $this->render('vue/hook.html.twig');
    }

    /**
     * @Route("/vue-notemaster", name="vue-notemaster")
     */
    public function noteMaster()
    {
        return $this->render('vue/notemaster.html.twig');
    }

    /**
     * @Route("/vue-starbase", name="vue-starbase")
     */
    public function starBase()
    {
        return $this->render('vue/starbase.html.twig');
    }
}
