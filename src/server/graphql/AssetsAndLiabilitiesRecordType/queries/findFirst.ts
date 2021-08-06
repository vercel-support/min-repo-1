import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeFindFirstQuery = queryField(
  'findFirstAssetsAndLiabilitiesRecordType',
  {
    type: 'AssetsAndLiabilitiesRecordType',
    args: {
      where: 'AssetsAndLiabilitiesRecordTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesRecordTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesRecordTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
