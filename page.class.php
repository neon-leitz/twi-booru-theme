<?php

declare(strict_types=1);

namespace Shimmie2;

class Page extends BasePage
{
    public function body_html(): string
    {
        $left_block_html = "";
        $main_block_html = "";
        $sub_block_html = "";

        foreach ($this->blocks as $block) {
            switch ($block->section) {
                case "left":
                    $left_block_html .= $block->get_html(true);
                    break;
                case "main":
                    $main_block_html .= $block->get_html(false);
                    break;
                case "subheading":
                    $sub_block_html .= $block->body;
                    break;
                default:
                    print "<p>error: {$block->header} using an unknown section ({$block->section})";
                    break;
            }
        }

        if (empty($this->subheading)) {
            $subheading = "";
        } else {
            $subheading = "<div id='subtitle'>{$this->subheading}</div>";
        }

        if ($this->left_enabled) {
            $left = "<nav>$left_block_html</nav>";
            $withleft = "withleft";
        } else {
            $left = "";
            $withleft = "";
        }

        $flash_html = $this->flash ? "<b id='flash'>".nl2br(html_escape(implode("\n", $this->flash)))."</b>" : "";
        $footer_html = $this->footer_html();

        return <<<EOD
		$left
    <header>
      <h1></h1>
    </header>
		<article class="$withleft">
			$flash_html
			$main_block_html
		</article>
		<footer>
			$footer_html
		</footer>
EOD;
    }
}
