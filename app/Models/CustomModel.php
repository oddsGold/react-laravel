<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomModel extends Model
{
    use HasFactory;

    public function generateUrl()
    {
        $url = '#';
        $sep = '/';
        if ($this->link != null and $this->link != '') {
            if (!$this->isGlobalUrl()) {
                $url = ($this->isFirstSlash($this->link) ? $this->link : $sep . $this->link);
            } else {
                $url = $this->link;
            }
        } else {
            if ($this->page != null and $this->page != '') {
                $url = $sep . 'page' . ($this->isFirstSlash($this->page) ? $this->page : $sep . $this->page);
            }
        }
        return $url;
    }

    public function isGlobalUrl()
    {
        return substr((string)$this->link, 0, 4) == 'http';
    }

    public function isFirstSlash($string)
    {
        return substr($string, 0, 1) == '/';
    }

    public function scopeParents($query)
    {
        $query->where('parent_id', 0);
        $query->orWhere('parent_id', null);
        return $query;
    }
}
