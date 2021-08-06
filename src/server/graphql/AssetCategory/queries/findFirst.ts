import { queryField, list } from 'nexus'

export const AssetCategoryFindFirstQuery = queryField(
  'findFirstAssetCategory',
  {
    type: 'AssetCategory',
    args: {
      where: 'AssetCategoryWhereInput',
      orderBy: list('AssetCategoryOrderByInput'),
      cursor: 'AssetCategoryWhereUniqueInput',
      distinct: 'AssetCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategory.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
