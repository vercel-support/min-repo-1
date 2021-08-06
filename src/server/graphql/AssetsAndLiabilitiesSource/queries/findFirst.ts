import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesSourceFindFirstQuery = queryField(
  'findFirstAssetsAndLiabilitiesSource',
  {
    type: 'AssetsAndLiabilitiesSource',
    args: {
      where: 'AssetsAndLiabilitiesSourceWhereInput',
      orderBy: list('AssetsAndLiabilitiesSourceOrderByInput'),
      cursor: 'AssetsAndLiabilitiesSourceWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesSourceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
