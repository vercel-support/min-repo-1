import { queryField, nonNull } from 'nexus'

export const AssetCategoryFindUniqueQuery = queryField(
  'findUniqueAssetCategory',
  {
    type: 'AssetCategory',
    args: {
      where: nonNull('AssetCategoryWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetCategory.findUnique({
        where,
        ...select,
      })
    },
  },
)
