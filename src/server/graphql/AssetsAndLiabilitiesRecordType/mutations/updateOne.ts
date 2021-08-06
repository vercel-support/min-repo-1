import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeUpdateOneMutation = mutationField(
  'updateOneAssetsAndLiabilitiesRecordType',
  {
    type: nonNull('AssetsAndLiabilitiesRecordType'),
    args: {
      where: nonNull('AssetsAndLiabilitiesRecordTypeWhereUniqueInput'),
      data: nonNull('AssetsAndLiabilitiesRecordTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
