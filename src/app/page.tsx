'use client' // ブラウザ側で動かすための宣言

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    // データベースからタスクを取得してみるテスト
    const fetchTasks = async () => {
      const { data, error } = await supabase.from('tasks').select('*')
      if (data) {
        setTasks(data)
      }
    }
    fetchTasks()
  }, [supabase])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Supabase 接続テスト</h1>
      <p className="mt-4">
        {tasks.length === 0 
          ? "接続成功！タスクはまだありません（SQLでテーブルだけ作った状態なので正常です）" 
          : `取得したタスク数: ${tasks.length}`}
      </p>
    </main>
  )
}