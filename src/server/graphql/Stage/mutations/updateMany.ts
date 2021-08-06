import { mutationField, nonNull } from 'nexus'

export const StageUpdateManyMutation = mutationField('updateManyStage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StageWhereInput',
    data: nonNull('StageUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stage.updateMany(args as any)
  },
})
