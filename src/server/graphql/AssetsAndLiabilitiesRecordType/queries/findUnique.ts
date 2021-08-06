import { queryField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeFindUniqueQuery = queryField(
  'findUniqueAssetsAndLiabilitiesRecordType',
  {
    type: 'AssetsAndLiabilitiesRecordType',
    args: {
      where: nonNull('AssetsAndLiabilitiesRecordTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.findUnique({
        where,
        ...select,
      })
    },
  },
)
