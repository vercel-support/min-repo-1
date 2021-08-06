import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeFindManyQuery = queryField(
  'findManyAssetsAndLiabilitiesRecordType',
  {
    type: nonNull(list(nonNull('AssetsAndLiabilitiesRecordType'))),
    args: {
      where: 'AssetsAndLiabilitiesRecordTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesRecordTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesRecordTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
