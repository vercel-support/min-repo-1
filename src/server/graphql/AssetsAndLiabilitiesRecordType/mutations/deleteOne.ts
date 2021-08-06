import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeDeleteOneMutation = mutationField(
  'deleteOneAssetsAndLiabilitiesRecordType',
  {
    type: 'AssetsAndLiabilitiesRecordType',
    args: {
      where: nonNull('AssetsAndLiabilitiesRecordTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.assetsAndLiabilitiesRecordType.delete({
        where,
        ...select,
      })
    },
  },
)
