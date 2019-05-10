<?php
/**
 * Created by PhpStorm.
 * User: alaeddine
 * Date: 06/05/19
 * Time: 17:02
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{

    /**
     * @Route("/home")
     */
    public function number()
    {
        $number = random_int(0, 100);

        return $this->render('home.html.twig', ['number' => $number]);
    }

    /**
     * @Route("/timeline")
     */
    public function timeline()
    {
        return $this->render('timeline.html.twig', ['number' => 10]);
    }
}