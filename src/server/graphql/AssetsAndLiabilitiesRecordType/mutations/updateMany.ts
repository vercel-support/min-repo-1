import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeUpdateManyMutation = mutationField(
  'updateManyAssetsAndLiabilitiesRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesRecordTypeWhereInput',
      data: nonNull('AssetsAndLiabilitiesRecordTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilitiesRecordType.updateMany(args as any)
    },
  },
)
