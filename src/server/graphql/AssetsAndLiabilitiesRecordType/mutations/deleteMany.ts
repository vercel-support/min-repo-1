import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeDeleteManyMutation = mutationField(
  'deleteManyAssetsAndLiabilitiesRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesRecordTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.assetsAndLiabilitiesRecordType.deleteMany({ where } as any)
    },
  },
)
