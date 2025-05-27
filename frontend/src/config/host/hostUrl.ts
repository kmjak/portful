/**
 * @description
 * ホストURLを取得するための設定
 * もし環境変数が設定されていない場合は、デフォルトでlocalhostを使用
 */
export const hostUrl: string = process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:3000";
